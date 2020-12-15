class RemoveCollectionIdsFromShots < ActiveRecord::Migration[6.0]
  def change
    remove_column :shots, :collection_id, :integer
    add_column :shots, :collection_id, :bigint
    add_index :shots, :collection_id
  end
end
