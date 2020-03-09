Rails.application.routes.draw do
  get 'settings/edit', to: 'settings#edit', as: :settings_edit
  get 'fetch_weather', to: 'routines#fetchWeather'
  patch 'computer_times/update_one_min', to: "computer_times#update_one_min"
  patch 'routines/complete_morning_routine', to: 'routines#complete_morning_routine', as: :complete_morning_routine
  patch 'routines/complete_night_routine', to: 'routines#complete_nigth_routine', as: :complete_night_routine
  patch 'settings/toggle_morning_notification', to: 'settings#toggle_morning_notification', as: :morning_toggle
  patch 'settings/toggle_night_notification', to: 'settings#toggle_night_notification', as: :night_toggle
  patch 'settings/update_night_time', to: 'settings#update_night_time', as: :update_night
  patch 'settings/update_morning_time', to: 'settings#update_morning_time', as: :update_morning
  patch 'settings/toggle_eye_break_notification', to: 'settings#toggle_eye_break_notification', as: :toggle_eye_break
  get 'resources', to: 'resources#index', as: :resources
  get 'blinking-exercises', to: 'exercises#index', as: :exercises
  get 'dashboard', to: 'pages#dashboard', as: :dashboard
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
