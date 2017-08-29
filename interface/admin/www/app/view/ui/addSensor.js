/*
 * File: app/view/ui/Editor1.js
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */
Ext.define('istsos.view.ui.addSensor',
{
    extend: 'Ext.panel.Panel',
    requires: ['istsos.view.ProcedureChart', 'istsos.view.ProcedureChooser', 'istsos.view.ProcedureGridEditor'],
    border: 0,
    padding: 0,
    layout:
    {
        type: 'border'
    },
    initComponent: function()
    {
        var me = this;
        Ext.applyIf(me,
        {
            items: [
            {
                "xtype": "tabpanel",
                "activeTab": 0,
                "region": "center",
                "items": [
                {
                    "xtype": "panel",
                    "title": "CSV",
                    "items": [
                    {
                        "xtype": "panel",
                        "title": "",
                        "layout":
                        {
                            "type": "vbox",
                            "align": "stretch"
                        }
                    },
                    {
                        "xtype": "filefield",
                        "flex": 0,
                        "id": "addSensorBrowse",
                        "margin": "10 10 10 10",
                        "maxWidth": 2000,
                        "minWidth": 500,
                        "width": 700,
                        "fieldLabel": "Input file",
                        "labelWidth": 80,
                        "buttonMargin": 10
                    },
                    {
                        xtype: 'panel',
                        border: 0,
                        layout:
                        {
                            type: 'hbox'
                        },
                        items: [
                        {
                            "xtype": "panel",
                            "maxheight": 500,
                            "minheight": 160,
                            "height": 160,
                            "flex": 1,
                            "id": "addSensorCsvread",
                            "padding": "5 5 10 10",
                            "bodyBorder": true,
                            "title": "",
                            "layout":
                            {
                                "type": "hbox",
                                "align": "stretch"
                            },
                            "items": [
                            {
                                "xtype": "panel",
                                "flex": 1,
                                "title": "",
                                "layout":
                                {
                                    "type": "vbox",
                                    "align": "stretch",
                                    "padding": "0 20 0 0"
                                },
                                "items": [
                                {
                                    "xtype": "radiogroup",
                                    "flex": 1,
                                    "id": "addSensorSeparator",
                                    "width": 400,
                                    "fieldLabel": "Separator",
                                    "labelWidth": 70,
                                    "items": [
                                    {
                                        "xtype": "radiofield",
                                        "boxLabel": "Tab"
                                    },
                                    {
                                        "xtype": "radiofield",
                                        "boxLabel": "Comma"
                                    },
                                    {
                                        "xtype": "radiofield",
                                        "boxLabel": "Semicolon"
                                    },
                                    {
                                        "xtype": "radiofield",
                                        "boxLabel": "Space"
                                    },
                                    {
                                        "xtype": "radiofield",
                                        "boxLabel": "Skiprow"
                                    }]
                                },
                                {
                                    "xtype": "spinnerfield",
                                    "flex": 1,
                                    "id": "addSensorValueColumn",
                                    "fieldLabel": "Value column"
                                },
                                {
                                    "xtype": "panel",
                                    "flex": 1,
                                    "margin": "5 5 10 0",
                                    "title": "",
                                    "layout":
                                    {
                                        "type": "hbox",
                                        "align": "stretch"
                                    },
                                    "items": [
                                    {
                                        "xtype": "textfield",
                                        "flex": 1,
                                        "margins": "",
                                        "id": "addSensorDatecolumn",
                                        "fieldLabel": "Date columns"
                                    },
                                    {
                                        "xtype": "checkboxfield",
                                        "flex": 1,
                                        "margins": "",
                                        "id": "addSensorDayfirst",
                                        "margin": "0 0 0 10",
                                        "fieldLabel": "",
                                        "boxLabel": "Day first"
                                    }]
                                },
                                {
                                    "xtype": "textfield",
                                    "flex": 1,
                                    "id": "addSensorNovalues",
                                    "fieldLabel": "no data values"
                                }]
                            },
                            {
                                "xtype": "panel",
                                "flex": 1,
                                "title": "",
                                "layout":
                                {
                                    "type": "vbox",
                                    "align": "stretch"
                                },
                                "items": [
                                {
                                    "xtype": "spinnerfield",
                                    "flex": 1,
                                    "id": "comboxSkiprow",
                                    "fieldLabel": "Skiprow"
                                },
                                {
                                    "xtype": "spinnerfield",
                                    "flex": 1,
                                    "id": "addSensorQualitycolumn",
                                    "fieldLabel": "Quality column"
                                },
                                {
                                    "xtype": "combobox",
                                    "flex": 1,
                                    "id": "addSensorDateformate",
                                    "fieldLabel": "Date Formate"
                                },
                                {
                                    "xtype": "panel",
                                    "flex": 1,
                                    "title": "",
                                    "layout":
                                    {
                                        "type": "hbox",
                                        "align": "stretch"
                                    },
                                    "items": [
                                    {
                                        "xtype": "textfield",
                                        "flex": 1,
                                        "id": "addSensorComment",
                                        "fieldLabel": "comment"
                                    },
                                    {
                                        "xtype": "button",
                                        "flex": 1,
                                        "margins": "",
                                        "id": "addSensorPreview",
                                        "margin": "0 0 0 10",
                                        "maxWidth": 200,
                                        "width": 0,
                                        "text": "Preview"
                                    }]
                                }]
                            }]
                        },
                        {
                            "xtype": "panel",
                            "flex": 1,
                            "maxheight": 500,
                            "minheight": 160,
                            "height": 160,
                            "title": "",
                            "layout":
                            {
                                "type": "vbox",
                                "align": "stretch"
                            },
                            "items": [
                            {
                                "xtype": "textfield",
                                "flex": 1,
                                "id": "addSensorSensorname",
                                "fieldLabel": "Sensor name"
                            },
                            {
                                "xtype": "textareafield",
                                "flex": 1,
                                "id": "addSensorDescription",
                                "fieldLabel": "Description"
                            },
                            {
                                "xtype": "panel",
                                "flex": 1,
                                "margin": "0 5 5 0",
                                "title": "",
                                "layout":
                                {
                                    "type": "hbox",
                                    "align": "stretch"
                                },
                                "items": [
                                {
                                    "xtype": "textfield",
                                    "flex": 1,
                                    "id": "addSensorLongitude",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "Longitude",
                                    "labelWidth": 70
                                },
                                {
                                    "xtype": "textfield",
                                    "flex": 1,
                                    "id": "addSensorLatitude",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "Latitude",
                                    "labelWidth": 70
                                },
                                {
                                    "xtype": "textfield",
                                    "flex": 1,
                                    "id": "addSensorAltitude",
                                    "fieldLabel": "Altitude",
                                    "labelWidth": 70
                                }]
                            },
                            {
                                "xtype": "panel",
                                "flex": 1,
                                "margin": "0 5 5 0",
                                "title": "",
                                "layout":
                                {
                                    "type": "hbox",
                                    "align": "stretch"
                                },
                                "items": [
                                {
                                    "xtype": "combobox",
                                    "flex": 1,
                                    "id": "addSensorObserved",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "Observed Property",
                                    "labelWidth": 120
                                },
                                {
                                    "xtype": "combobox",
                                    "flex": 1,
                                    "id": "addSensorMeasure",
                                    "fieldLabel": "unit of measure"
                                }]
                            },
                            {
                                "xtype": "panel",
                                "flex": 1,
                                "margin": "0 5 5 0",
                                "title": "",
                                "layout":
                                {
                                    "type": "hbox",
                                    "align": "stretch"
                                },
                                "items": [
                                {
                                    "xtype": "checkboxfield",
                                    "flex": 1,
                                    "id": "addSensorUse",
                                    "margin": "0 10 0 120",
                                    "maxWidth": 70,
                                    "width": 50,
                                    "fieldLabel": "",
                                    "labelWidth": 50,
                                    "boxLabel": "use"
                                },
                                {
                                    "xtype": "combobox",
                                    "flex": 1,
                                    "id": "addSensorState",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "state flig",
                                    "labelWidth": 70
                                },
                                {
                                    "xtype": "spinnerfield",
                                    "flex": 1,
                                    "id": "addSensorTop",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "top/bottom screen",
                                    "labelWidth": 120
                                },
                                {
                                    "xtype": "spinnerfield",
                                    "flex": 1,
                                    "id": "addSensorBottom",
                                    "fieldLabel": ""
                                }]
                            }]
                        }]
                    },
                    {
                        "xtype": "panel",
                        "maxheight": 600,
                        "minheight": 160,
                        "height": 500,
                        "padding": "10 10 5 5",
                        "flex": 1,
                        "title": "",
                        "layout":
                        {
                            "type": "vbox",
                            "align": "stretch"
                        },
                        "items": [
                        {
                            "xtype": "textareafield",
                            "flex": 1,
                            "id": "addSensorTextarea1",
                            "margin": "0 5 5 0",
                            "fieldLabel": ""
                        },
                        {
                            "xtype": "panel",
                            "height": 25,
                            "bodyBorder": true,
                            "layout":
                            {
                                "type": "hbox",
                                "align": "stretch"
                            },
                            "items": [
                            {
                                "xtype": "label",
                                "text": "Date",
                                "margin": "0 30 0 0"
                            },
                            {
                                "xtype": "label",
                                "text": "Data",
                                "margin": "0 30 0 0"
                            },
                            {
                                "xtype": "label",
                                "text": "Quality",
                                "margin": "0 30 0 0"
                            }]
                        },
                        {
                            "xtype": "textareafield",
                            "flex": 1,
                            "id": "addSensorTextarea2",
                            "margin": "0 5 5 0",
                            "fieldLabel": ""
                        }]
                    },
                    {
                        "xtype": "panel",
                        "flex": 1,
                        "margin": "",
                        "height": 50,
                        "title": "",
                        "layout":
                        {
                            "type": "hbox",
                            "align": "stretch",
                            "pack": "end"
                        },
                        "items": [
                        {
                            "xtype": "button",
                            "id": "addSensorApply",
                            "margin": "5 5 5 5",
                            "width": 100,
                            "text": "Apply"
                        },
                        {
                            "xtype": "button",
                            "id": "addSensorCancel",
                            "margin": "5 5 5 5",
                            "width": 100,
                            "text": "Cancel"
                        },
                        {
                            "xtype": "button",
                            "alignTarget": "east",
                            "id": "addSensorOk",
                            "margin": "5 5 5 5",
                            "width": 100,
                            "text": "Ok"
                        }]
                    }]
                },
                {
                    "xtype": "panel",
                    "title": "istSOS",
                    "flex": 1,
                    "items": [
                    {
                        "xtype": "panel",
                        "flex": 1,
                        "title": "",
                        "layout":
                        {
                            "type": "hbox",
                        },
                        "items": [
                        {
                            "xtype": "panel",
                            "bodyBorder": true,
                            "height": 220,
                            "flex": 1,
                            "layout":
                            {
                                "type": "vbox",
                                "align": "stretch"
                            },
                            "items": [
                            {
                                "xtype": "panel",
                                "margin": "0 5 5 0",
                                "padding": "5 5 5 5",
                                "width": 1500,
                                "flex": 0.9,
                                "layout":
                                {
                                    "type": "hbox",
                                    "align": "stretch"
                                },
                                "items": [
                                {
                                    "xtype": "combobox",
                                    "flex": 1,
                                    "id": "addistSOSSos",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "SOS Server"
                                },
                                {
                                    "xtype": "button",
                                    "flex": 0.6,
                                    "margins": "",
                                    "id": "addistSOSConnet",
                                    "margin": "0 10 0 0",
                                    "padding": "5 5 5 5",
                                    "text": "Connect"
                                },
                                {
                                    "xtype": "button",
                                    "flex": 0.6,
                                    "margins": "",
                                    "id": "addistSOSEdit",
                                    "margin": "0 10 0 0",
                                    "padding": "5 5 5 5",
                                    "text": "Edit"
                                },
                                {
                                    "xtype": "button",
                                    "flex": 0.6,
                                    "margins": "",
                                    "id": "addistSOSNew",
                                    "margin": "0 10 0 0",
                                    "padding": "5 5 5 5",
                                    "text": "New"
                                },
                                {
                                    "xtype": "button",
                                    "flex": 0.6,
                                    "margins": "",
                                    "id": "addistSOSDelete",
                                    "padding": "5 5 5 5",
                                    "text": "Delete"
                                }]
                            },
                            {
                                "xtype": "panel",
                                "width": 1500,
                                "flex": 0.7,
                                "margin": "0 5 5 0",
                                "title": "",
                                "layout":
                                {
                                    "type": "hbox",
                                    "align": "stretch"
                                },
                                "items": [
                                {
                                    "xtype": "combobox",
                                    "flex": 1,
                                    "id": "addistSOSSensor",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "Sensor"
                                },
                                {
                                    "xtype": "combobox",
                                    "flex": 1,
                                    "id": "addistSOSObserv",
                                    "margin": "0 5 0 0",
                                    "fieldLabel": "Observed Property"
                                },
                                {
                                    "xtype": "combobox",
                                    "flex": 1,
                                    "id": "addistSOSFrequency",
                                    "fieldLabel": "Frequency"
                                }]
                            },
                            {
                                "xtype": "panel",
                                "flex": 2,
                                "width": 1500,
                                "margin": "0 5 5 0",
                                "title": "",
                                "layout":
                                {
                                    "type": "hbox",
                                    "align": "stretch"
                                },
                                "items": [
                                {
                                    "xtype": "panel",
                                    "flex": 0.3,
                                    "maxWidth": 70,
                                    "minWidth": 50,
                                    "width": 50,
                                    "title": "",
                                    "layout":
                                    {
                                        "type": "hbox",
                                        "align": "middle"
                                    },
                                    "items": [
                                    {
                                        "xtype": "checkboxfield",
                                        "id": "addistSOSTime",
                                        "fieldLabel": "",
                                        "boxLabel": "time"
                                    }]
                                },
                                {
                                    "xtype": "panel",
                                    "flex": 1,
                                    "title": "",
                                    "layout":
                                    {
                                        "type": "vbox",
                                        "align": "stretch"
                                    },
                                    "items": [
                                    {
                                        "xtype": "panel",
                                        "flex": 1,
                                        "margin": "0 5 5 0",
                                        "title": "",
                                        "layout":
                                        {
                                            "type": "hbox",
                                            "align": "stretch"
                                        },
                                        "items": [
                                        {
                                            "xtype": "spinnerfield",
                                            "id": "addistSOSBegin",
                                            "margin": "0 10 0 0",
                                            "fieldLabel": "Begin",
                                            "labelWidth": 60
                                        },
                                        {
                                            "xtype": "spinnerfield",
                                            "id": "addistSOSEnd",
                                            "margin": "0 10 0 0",
                                            "width": "",
                                            "fieldLabel": "End",
                                            "labelWidth": 50
                                        },
                                        {
                                            "xtype": "spinnerfield",
                                            "flex": 1,
                                            "id": "addistSOSTimezone",
                                            "fieldLabel": "Timezone",
                                            "labelWidth": 70
                                        }]
                                    },
                                    {
                                        "xtype": "panel",
                                        "flex": 1,
                                        "margin": "0 5 5 0",
                                        "title": "",
                                        "layout":
                                        {
                                            "type": "hbox",
                                            "align": "stretch"
                                        },
                                        "items": [
                                        {
                                            "xtype": "combobox",
                                            "flex": 1,
                                            "id": "addistSOSAggregare",
                                            "margin": "0 10 0 0",
                                            "fieldLabel": "Aggregate function",
                                            "labelWidth": 120
                                        },
                                        {
                                            "xtype": "textfield",
                                            "flex": 1,
                                            "id": "addistSOSAggregateInterval",
                                            "fieldLabel": "Aggregate interval",
                                            "labelWidth": 120
                                        }]
                                    }]
                                }]
                            }]
                        },
                        {
                            "xtype": "panel",
                            "margin": "0 5 5 0",
                            "bodyBorder": true,
                            "flex": 1,
                            "height": 220,
                            "title": "",
                            "layout":
                            {
                                "type": "vbox",
                                "align": "stretch"
                            },
                            "items": [
                            {
                                "xtype": "textfield",
                                "flex": 1,
                                "id": "addistSOSSensorName",
                                "fieldLabel": "Sensor name"
                            },
                            {
                                "xtype": "textareafield",
                                "flex": 1,
                                "id": "addistSOSDescription",
                                "fieldLabel": "Description"
                            },
                            {
                                "xtype": "panel",
                                "flex": 1,
                                "margin": "0 5 5 0",
                                "title": "",
                                "layout":
                                {
                                    "type": "hbox",
                                    "align": "stretch"
                                },
                                "items": [
                                {
                                    "xtype": "textfield",
                                    "flex": 1,
                                    "id": "addistSOSLongitude",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "Longitude"
                                },
                                {
                                    "xtype": "textfield",
                                    "flex": 1,
                                    "id": "addistSOSLatitude",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "Latitude"
                                },
                                {
                                    "xtype": "textfield",
                                    "flex": 1,
                                    "id": "addistSOSAltitude",
                                    "fieldLabel": "Altitude"
                                }]
                            },
                            {
                                "xtype": "panel",
                                "flex": 1,
                                "margin": "0 5 5 0",
                                "title": "",
                                "layout":
                                {
                                    "type": "hbox",
                                    "align": "stretch"
                                },
                                "items": [
                                {
                                    "xtype": "combobox",
                                    "flex": 1,
                                    "id": "addistSOSObservedProperty",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "Observed Property"
                                },
                                {
                                    "xtype": "combobox",
                                    "flex": 1,
                                    "id": "addistSOSMeasure",
                                    "fieldLabel": "unit of measure"
                                }]
                            },
                            {
                                "xtype": "panel",
                                "flex": 1,
                                "title": "",
                                "layout":
                                {
                                    "type": "hbox",
                                    "align": "stretch"
                                },
                                "items": [
                                {
                                    "xtype": "checkboxfield",
                                    "flex": 1,
                                    "id": "addistSOSUse",
                                    "margin": "0 0 0 100",
                                    "maxWidth": 70,
                                    "minWidth": 40,
                                    "width": 50,
                                    "fieldLabel": "",
                                    "labelWidth": 50,
                                    "boxLabel": "use"
                                },
                                {
                                    "xtype": "combobox",
                                    "flex": 1,
                                    "id": "addistSOSStat",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "stat",
                                    "labelWidth": 50
                                },
                                {
                                    "xtype": "spinnerfield",
                                    "flex": 1,
                                    "id": "addistSOSTop",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": "top/bottom screen"
                                },
                                {
                                    "xtype": "spinnerfield",
                                    "flex": 1,
                                    "id": "addistSOSBottom",
                                    "margin": "0 10 0 0",
                                    "fieldLabel": ""
                                }]
                            }]
                        }]
                    },
                    {
                        "xtype": "panel",
                        "height": 450,
                        "id": "addistSOSTextArea",
                        "margin": "0 10 10 0",
                        "flex": 2,
                        "bodyBorder": true,
                        "title": "",
                        "layout":
                        {
                            "type": "hbox",
                            "align": "stretch"
                        }
                    },
                    {
                        "xtype": "panel",
                        "flex": 1,
                        "margin": "",
                        "height": 50,
                        "title": "",
                        "layout":
                        {
                            "type": "hbox",
                            "align": "stretch",
                            "pack": "end"
                        },
                        "items": [
                        {
                            "xtype": "button",
                            "id": "addistSOSButtonApply",
                            "margin": "5 5 5 5",
                            "width": 100,
                            "text": "Apply"
                        },
                        {
                            "xtype": "button",
                            "id": "addistSOSButtonCancel",
                            "margin": "5 5 5 5",
                            "width": 100,
                            "text": "Cancel"
                        },
                        {
                            "xtype": "button",
                            "alignTarget": "east",
                            "id": "addistSOSButtonOk",
                            "margin": "5 5 5 5",
                            "width": 100,
                            "text": "Ok"
                        }]
                    }]
                },
                {
                    "xtype": "panel",
                    "title": "Raw"
                }]
            }]
        });
        me.callParent(arguments);
    }
});