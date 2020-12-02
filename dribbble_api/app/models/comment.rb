class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :shot
  belongs_to :commenter, class_name: :User, foreign_key: :commenter_id
  belongs_to :commentee, class_name: :User, foreign_key: :commentee_id
  belongs_to :parent_comment, class_name: :Comment, foreign_key: :parent_comment_id, optional: true
  has_many :repliess, class_name: :Comment, foreign_key: :parent_comment_id, dependent: :destroy
  has_many :likes, as: :likable
end
