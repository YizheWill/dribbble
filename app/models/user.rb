class User < ApplicationRecord
  attr_reader :password

  before_validation :ensure_session_token!
  validates :name, presence: true
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :shots, dependent: :destroy
  has_many :collections, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :shot_comments, through: :shots, source: :comments
  has_many :comment_commenters, through: :comments, source: :user
  has_many :commentlikes
  has_many :shotlikes, dependent: :destroy
  has_many :liked_shots, through: :shotlikes, source: :shot

  has_many :follower_relationships, foreign_key: :following_id, class_name: 'Follow'
  has_many :followers, through: :follower_relationships, source: :follower
  has_many :following_relationships, foreign_key: :follower_id, class_name: 'Follow'
  has_many :following, through: :following_relationships, source: :following

  def self.find_by_credentials(username, email, password, word)
    if word
      return User.find_by(session_token: word)
    end
    user = User.find_by(username: username) || User.find_by(email: email)
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
