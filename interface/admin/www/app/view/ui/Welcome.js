/*
 * File: app/view/ui/Welcome.js
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.Welcome', {
    extend: 'Ext.container.Viewport',

    style: 'background-color: #004106;',
    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    border: 0,
                    id: 'contentcards',
                    activeItem: 0,
                    layout: {
                        type: 'card'
                    },
                    title: '',
                    items: [
                        {
                            xtype: 'container',
                            padding: 18,
                            style: 'background-color: #004106;',
                            layout: {
                                align: 'center',
                                pack: 'center',
                                padding: 18,
                                type: 'vbox'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    border: 0,
                                    height: 150,
                                    id: 'loginCard',
                                    style: 'background-color: #004106;',
                                    width: 300,
                                    layout: {
                                        type: 'anchor'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            height: 50,
                                            style: 'background-color: #004106;',
                                            layout: {
                                                align: 'middle',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    html: '<h1>Welcome to</h1>',
                                                    style: 'text-align: center; color: white; font-size: 18px;',
                                                    flex: 1
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            height: 50,
                                            style: 'background-color: #004106;',
                                            layout: {
                                                align: 'middle',
                                                pack: 'center',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    height: 40,
                                                    width: 170,
                                                    src: 'images/istsos-logo.png'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            height: 50,
                                            style: 'background-color: #004106;',
                                            layout: {
                                                align: 'middle',
                                                pack: 'center',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    id: 'btnLogin',
                                                    width: 80,
                                                    text: 'Login'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    height: 30,
                                    hidden: true,
                                    id: 'loginFailed',
                                    margin: '15px 0px 0px 0px',
                                    width: 150,
                                    layout: {
                                        align: 'center',
                                        type: 'vbox'
                                    },
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'container',
                                            html: 'Login failed',
                                            style: 'color: red;',
                                            flex: 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});