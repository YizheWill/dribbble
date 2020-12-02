class Tag < ApplicationRecord
  has_many :image_tags
  has_many :shots, through: :image_tags, source: :shot
end
