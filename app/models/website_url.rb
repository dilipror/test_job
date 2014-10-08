class WebsiteUrl < ActiveRecord::Base
  scope :recent, lambda{ order("id desc") }
  
  before_create :remove_extra_variable_from_url, :url_is_unique
  
  def remove_extra_variable_from_url
    self.name = self.name.gsub(/^(www\.|http:\/\/www\.|https:\/\/www\.|http:\/\/)/, '').gsub(/\/(.*)/,'\2')
  end
  
  def url_is_unique
    # Get the current count of objects having this url
    count = WebsiteUrl.count(:conditions => ['name = ?', self.name])
    # Return false if the count is not zero
    return false unless count == 0
  end
end
