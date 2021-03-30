# -*- coding: utf-8 -*-
{
    'name': "pilihmenu-odoo",

    'summary': """
        Buku menu restoran paling simple!
    """,

    'description': """
        Pilihme.nu memfasilitasi restoran Anda untuk tranformasi ke buku menu digital yang terintegrasi dengan restoran Anda!
    """,

    'author': "Pilihmenu Indonesia",
    'website': "http://www.pilihme.nu",
    'category': 'Apps',
    'version': '12.0.1',

    'depends': [
        'product',
        'stock',
        'sale',
        'website',
        'website_sale',
        'point_of_sale',
        'base',
    ],

    'data': [
        'views/welcomepage.xml',
        'views/product.xml',
        'views/product-qrcode.xml',
        'views/product-detail.xml',
        'views/address-form.xml',
        'views/address-b2b.xml',
        'views/cart-support.xml',
        'views/wizard-checkout.xml',
        'views/order-cart.xml',
        'views/cart-total.xml',
        'views/header.xml',
        'views/footer.xml',
        'views/homepage.xml',
    ],

    'demo': [
        'demo/demo.xml',
    ],

    'installable': True,
    'application': True,
}