Rails.application.routes.draw do
  root 'application#angular'

  devise_for :users, except: [:new, :edit]
  resources :features, except: [:new, :edit] do
    resources :questions, except: [:new, :edit]
  end

  get '*unmatched_route', to: 'application#angular'
end
