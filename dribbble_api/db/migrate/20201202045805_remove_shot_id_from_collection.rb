class RemoveShotIdFromCollection < ActiveRecord::Migration[6.0]
  def change
    remove_column :collections, :shot_id, :integer
  end
end
