Rails.application.routes.draw do
  root "products#index"

  resources :products, only: [:index, :show] do
    resources :reviews, only: [:create]
  end
end
