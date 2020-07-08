class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :type
      t.integer :due_date
      t.boolean :completed
      t.string :notes

      t.timestamps
    end
  end
end
