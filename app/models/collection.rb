class Collection < ApplicationRecord
  belongs_to :user
  has_many :shots, foreign_key: :collection_id, class_name: :Shot
  has_many :artists, through: :shots, source: :user
end
