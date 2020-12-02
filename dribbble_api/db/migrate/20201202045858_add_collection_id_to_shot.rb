class AddCollectionIdToShot < ActiveRecord::Migration[6.0]
  def change
    add_column :shots, :collection_id, :integer
    add_index :shots, :collection_id
  end
end
