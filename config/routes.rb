Rails.application.routes.draw do
  root 'application#angular'

  devise_for :users

  match "*path", to: "application#angular", via: :all
end
