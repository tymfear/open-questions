Rails.application.routes.draw do
  root 'application#angular'

  devise_for :users
  resources :features

  get '*unmatched_route', to: 'application#angular'
end
