class Comment < ApplicationRecord
  belongs_to :shot
  belongs_to :commenter, class_name: :User, foreign_key: 'commenter_id'
  has_many :likes, as: :likable
end
