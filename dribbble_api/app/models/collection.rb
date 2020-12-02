class Collection < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  belongs_to :user
  has_many :shots
end
