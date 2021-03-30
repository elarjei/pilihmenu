# -*- coding: utf-8 -*-

from odoo import models
from odoo import fields
from odoo import api
from odoo import http
from odoo.http import request
from odoo.addons.website.controllers.main import Website
from odoo.addons.portal.controllers.web import Home

class WebsiteSort(Home):
   @http.route()

   def index(self, **kw):
      super(WebsiteSort, self).index()
      website_product_ids = request.env['product.template'].search([('is_published', '=', True)])

      return request.render(
         'website.homepage', {
            'website_product_ids': website_product_ids
         }
      )
