/*
 * File: app/store/vplist.js
 * Date: Tue Nov 05 2013 14:43:29 GMT+0100 (CET)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.store.vplist', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'vplist',
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json',
                    idProperty: 'name',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'name',
                    sortType: 'asText',
                    type: 'string'
                },
                {
                    name: 'offerings'
                },
                {
                    name: 'observedproperties'
                }
            ]
        }, cfg)]);
    }
});