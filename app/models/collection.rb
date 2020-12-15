class Collection < ApplicationRecord
  belongs_to :user
  has_many :shots
  has_many :artists, through: :shots, source: :user
end
