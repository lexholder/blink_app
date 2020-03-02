class CreateSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :settings do |t|
      t.boolean :eye_break_notification_active, default: true
      t.boolean :morning_notification_active, default: true
      t.boolean :night_notification_active, default: true
      t.references :user, foreign_key: true
      t.integer :morning_notification_hour, default: 8
      t.integer :morning_notification_minute, default: 30
      t.integer :night_notification_hour, default: 18
      t.integer :night_notification_minute, default: 30

      t.timestamps
    end
  end
end
