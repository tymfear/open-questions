Rails.application.routes.draw do
  root 'application#angular'

  devise_for :users, except: [:new, :edit]
  resources :features, except: [:new, :edit]

  get '*unmatched_route', to: 'application#angular'
end
