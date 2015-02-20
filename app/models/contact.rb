class Contact < MailForm::Base
	attribute :name 
	attribute :email

	def headers
		{
			:subject => "Test Contact Form",
			:to => "nam.nguyen52@gmail.com",
			:from => %("#{name}")
		}
	end
end
