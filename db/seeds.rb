# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning"

ComputerTime.destroy_all
Setting.destroy_all
User.destroy_all
Routine.destroy_all
Exercise.destroy_all



puts "Seeding..."


puts "Seeding exercises"

exercise_1 = Exercise.new(summary: "Gradual exercise from simple close to squeezing", title: "A tight squeeze", directions: "Close both eyes normally/Pause for two seconds/Open/Close the eyes normally again/Pause for two seconds/Aggressively squeeze the lids together for two seconds/Open eyes and relax")
exercise_1.save!

exercise_2 = Exercise.new(summary: "Vigorous exercise to energize and moisturize your eyes", title: "In the blink of an eye", directions: "Close your eyes/Blink hard for two seconds/Relax/Open your eyes")
exercise_2.save!

exercise_3 = Exercise.new(summary: "Simple exercise with double hard blink", title: "Easy on the eyes", directions: "Close your eyes/Pause for two seconds/Blink hard twice with your eyes still closed/Slowly open your eyes")
exercise_3.save!

exercise_4 = Exercise.new(summary: "Quick exercise to relax your eyes and your mind", title: "Sleeping Beauty", directions: "Slowly close your top lid to the bottom lid as if you were falling asleep/If done correctly, you should feel a \"hidden movement\" of the eyes behind the lids")
exercise_4.save!

puts "Seeding a user"
User.create(first_name: "Nathalie", email: "nathalie@mail.com", password: "hello123", city: "Montreal")


puts "Done seeding!"
