Questso::Application.routes.draw do

  devise_for :users
  resources :posts
  put 'posts/:id/upvote', to: 'posts#upvote', constraints: {id: /\d+/}
  put 'posts/:id/downvote', to: 'posts#downvote', constraints: {id: /\d+/}

  [:latest, :hot, :favorited, :read, :posted, :unread, :new, :trending, :fresh].each do |filter|
    get "#{filter}" => "list##{filter}"
    get "#{filter}/more" => "list##{filter}"
  end

  [:latest, :hot, :favorited, :read, :posted, :unread, :new, :trending, :fresh].each do |filter|
    root to: "list##{filter}", :as => "list_#{filter}"
  end

  match "/signup", to: "users#signup", via: "get"
  match "/signin", to: "users#signin", via: "get"

  match "/close", to: "static#close", via: "get"

  resources :users

  root to: "list#latest"

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
