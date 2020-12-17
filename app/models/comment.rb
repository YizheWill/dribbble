class Comment < ApplicationRecord
  validates :body, presence: true
  belongs_to :user
  belongs_to :shot
  has_many :replies, class_name: :Comment, foreign_key: :parent_comment_id, dependent: :destroy
  belongs_to :parent_comment, class_name: :Comment, foreign_key: :parent_comment_id, optional: true
  has_one :shot_artist, through: :shot, source: :user
  has_many :comment_commentees, through: :replies, source: :user
end
