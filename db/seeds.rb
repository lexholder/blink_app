# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning"

User.destroy_all
Routine.destroy_all
Exercise.destroy_all



puts "Seeding..."


puts "Seeding exercises"

exercise_1 = Exercise.new(summary: "Close/Pause Blinking Exercise", title: "Exercise 1", directions: "Close both eyes normally/Pause for two seconds/Open/Close the eyes normally again/Pause for two seconds/Aggressively squeeze the lids together for two seconds/Open eyes and relax")
exercise_1.save!

exercise_2 = Exercise.new(summary: "Hard Blinking Exercise", title: "Exercise 2", directions: "Close your eyes/Blink hard for two seconds/Relax/Open eyes")
exercise_2.save!

exercise_3 = Exercise.new(summary: "Sleepy Blink Exercise", title: "Exercise 3", directions: "Slowly close your top lid to the bottom lid as if you were falling asleep/If done correctly, you should feel a \"hidden movement\" of the eyes behind the lids")
exercise_3.save!

exercise_4 = Exercise.new(summary: "Double Blink Exercise", title: "Exercise 4", directions: "Close both eyes/Pause for two seconds/Blink hard twice with your eyes still closed/Slowly open your eyes")
exercise_4.save!

puts "Seeding a user"
User.create(first_name: "Nathalie", email: "nathalie@mail.com", password: "hello123")


puts "Done seeding!"
