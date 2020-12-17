class Shot < ApplicationRecord
  belongs_to :user
  belongs_to :collection, foreign_key: :collection_id, class_name: :Collection, optional: true
  has_many :comments, dependent: :destroy
  has_many :commenters, through: :comments, source: :user
end
