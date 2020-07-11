class AddTasksColToProspects < ActiveRecord::Migration[6.0]
  def change
    add_column :prospects, :tasks, :string, array: true, default: []
  end
end
