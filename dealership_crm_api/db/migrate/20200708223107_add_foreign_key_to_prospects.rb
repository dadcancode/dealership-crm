class AddForeignKeyToProspects < ActiveRecord::Migration[6.0]
  def change
    add_column :prospects, :user_id, :integer
  end
end
