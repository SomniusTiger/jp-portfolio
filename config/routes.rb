Rails.application.routes.draw do
  root 'public#index'

  # Public Pages
  match via: :get, '/about' => 'public#about', as: :about

end
