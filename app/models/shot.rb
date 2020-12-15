class Shot < ApplicationRecord
  belongs_to :user
  belongs_to :collection, foreign_key: :collection_id, class_name: :Collection, optional: true
end
