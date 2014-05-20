/*
 * File: app/store/testColumnStore.js
 * Date: Tue Mar 20 2012 10:10:02 GMT+0100 (CET)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.testColumnStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'testcolumnstore',
            proxy: {
                type: 'ajax',
                url: 'app/config/data.json',
                reader: {
                    type: 'json'
                }
            },
            fields: [
                {
                    name: 'isodate',
                    type: 'string'
                },
                {
                    name: 'value',
                    type: 'float'
                }
            ]
        }, cfg)]);
    }
});