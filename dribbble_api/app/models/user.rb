class User < ApplicationRecord
  before_validation :ensure_session_token!
  attr_reader :password
  validates :name, :username, :password_digest, presence: true, uniqueness: true
  has_many :shots, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liked_shots, through: :likeable, source_type: 'shot'
  has_many :comments, class_name: :Comment, foreign_key: :commenter_id, dependent: :destroy
  has_many :replies, class_name: :Comment, foreign_key: :commentee_id, dependent: :destroy

  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates_inclusion_of :tier, in: [0, 1, 2] # 0: normal, 1:pro, 2:team
  validates_inclusion_of :work_availability, in: [true, false]

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user&.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token!
    self.session_token ||= User.generate_session_token
  end
end
