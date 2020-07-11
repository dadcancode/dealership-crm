class RenameTypeColForTasks < ActiveRecord::Migration[6.0]
  def change
    rename_column :tasks, :type, :lead_type
  end
end
