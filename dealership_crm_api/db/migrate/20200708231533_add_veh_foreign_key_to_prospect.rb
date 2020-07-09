class AddVehForeignKeyToProspect < ActiveRecord::Migration[6.0]
  def change
    add_column :prospects, :vehicle_id, :integer
  end
end
