class Like < ApplicationRecord
  # validation

  # belongs to relation
  belongs_to :liker, class_name: :User, foreign_key: 'liker_id'
  belongs_to :likable, polymorphic: true

  # has many relation
end
