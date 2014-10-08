class WebsiteUrlsController < ApplicationController

  def index
    @website_urls = WebsiteUrl.all.recent
  end 
  
  def create
    @website_url = WebsiteUrl.create(name: params[:website_url][:name])
  end
end
