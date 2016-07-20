Rails.application.routes.draw do
  root 'application#angular'

  devise_for :users
  resources :features
end
