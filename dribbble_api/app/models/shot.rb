class Shot < ApplicationRecord
  # validation
  validates :title, :image_url, presence: true
  validates_inclusion_of :image_or_video, in: [true, false] # true will be image, false will be video, could be problematic if there is other kind of datatype
  validates_inclusion_of :allow_comment, in: [true, false]

  # belongs to relation
  belongs_to :user
  belongs_to :collection, optional: true

  # has many relation
  has_many :comments
  has_many :likes, as: :likable
  has_many :image_tags, dependent: :destroy
  has_many :tags, through: :image_tags, source: :tag
end
