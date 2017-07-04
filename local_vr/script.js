TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "label": "IMG_20160720_105601.vr"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "label": "IMG_20160720_111115.vr"
    }
   ],
   "opacity": 0.4,
   "fontColor": "#FFFFFF",
   "rollOverOpacity": 0.8,
   "backgroundColor": "#404040",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "class": "Menu",
   "selectedFontColor": "#FFFFFF",
   "id": "Menu_043AD88C_0993_A266_419D_D26735BA4090",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media"
  },
  "class": "Panorama",
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_t.jpg",
  "hfov": 360,
  "id": "panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3",
  "vfov": 53.76460331299041,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 3488,
       "height": 3488,
       "url": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_r_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_r.jpeg"
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 3488,
       "height": 3488,
       "url": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_f_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_f.jpeg"
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 3488,
       "height": 3488,
       "url": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_b_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_b.jpeg"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 3488,
       "height": 3488,
       "url": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_l_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_l.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_0013C644_0970_AEE5_419E_355CC5ED90DC, this.camera_040CC8A5_0993_A3A7_419B_DB73E30C5035); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_00B88451_0973_A2FF_4186_FA07E6DB65C5",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -156.68742216687423,
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 355,
           "height": 331,
           "url": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 12.900877187564449,
        "hfov": 11.362058262585755
       }
      ],
      "maps": [
       {
        "hfov": 11.362058262585755,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 177,
           "height": 165,
           "url": "media/panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -156.68742216687423,
        "roll": 0,
        "pitch": 12.900877187564449
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 65,
  "label": "IMG_20160720_105601.vr"
 },
 {
  "buttonPlayLeft": {
   "paddingBottom": 0,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B.png",
   "borderSize": 0,
   "width": 40,
   "horizontalAlign": "center",
   "height": 40,
   "id": "IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_rollover.png",
   "minHeight": 0,
   "shadow": false,
   "minWidth": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_pressed.png",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "cursor": "hand",
   "mode": "push",
   "transparencyActive": true,
   "borderRadius": 0
  },
  "buttonMoveUp": {
   "paddingBottom": 0,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F.png",
   "borderSize": 0,
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "id": "IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_rollover.png",
   "minHeight": 0,
   "shadow": false,
   "minWidth": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_pressed.png",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "cursor": "hand",
   "mode": "push",
   "transparencyActive": true,
   "borderRadius": 0
  },
  "buttonPause": {
   "paddingBottom": 0,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2.png",
   "borderSize": 0,
   "width": 40,
   "horizontalAlign": "center",
   "height": 40,
   "id": "IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
   "backgroundOpacity": 0,
   "minHeight": 0,
   "shadow": false,
   "minWidth": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2_pressed.png",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "cursor": "hand",
   "mode": "toggle",
   "transparencyActive": true,
   "borderRadius": 0
  },
  "class": "PanoramaPlayer",
  "buttonZoomIn": {
   "paddingBottom": 0,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA.png",
   "borderSize": 0,
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "id": "IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA",
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_rollover.png",
   "minHeight": 0,
   "shadow": false,
   "minWidth": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_pressed.png",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "cursor": "hand",
   "mode": "push",
   "transparencyActive": true,
   "borderRadius": 0
  },
  "buttonPlayRight": {
   "paddingBottom": 0,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF.png",
   "borderSize": 0,
   "width": 40,
   "horizontalAlign": "center",
   "height": 40,
   "id": "IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_rollover.png",
   "minHeight": 0,
   "shadow": false,
   "minWidth": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_pressed.png",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "cursor": "hand",
   "mode": "push",
   "transparencyActive": true,
   "borderRadius": 0
  },
  "displayPlaybackBar": true,
  "buttonCardboardView": {
   "paddingBottom": 0,
   "paddingLeft": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_05F8E4C2_0991_63E2_4152_DB3B23CF9314.png",
   "maxWidth": 56,
   "borderSize": 0,
   "maxHeight": 55,
   "width": 56,
   "horizontalAlign": "center",
   "height": 55,
   "id": "IconButton_05F8E4C2_0991_63E2_4152_DB3B23CF9314",
   "backgroundOpacity": 0,
   "minHeight": 1,
   "shadow": false,
   "minWidth": 1,
   "paddingTop": 0,
   "class": "IconButton",
   "paddingRight": 0,
   "verticalAlign": "middle",
   "cursor": "hand",
   "transparencyActive": false,
   "borderRadius": 0
  },
  "buttonMoveDown": {
   "paddingBottom": 0,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44.png",
   "borderSize": 0,
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "id": "IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44",
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_rollover.png",
   "minHeight": 0,
   "shadow": false,
   "minWidth": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_pressed.png",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "cursor": "hand",
   "mode": "push",
   "transparencyActive": true,
   "borderRadius": 0
  },
  "buttonRestart": {
   "paddingBottom": 0,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76.png",
   "borderSize": 0,
   "width": 40,
   "horizontalAlign": "center",
   "height": 40,
   "id": "IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_rollover.png",
   "minHeight": 0,
   "shadow": false,
   "minWidth": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_pressed.png",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "cursor": "hand",
   "mode": "push",
   "transparencyActive": true,
   "borderRadius": 0
  },
  "mouseControlMode": "drag_rotation",
  "buttonMoveRight": {
   "paddingBottom": 0,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40.png",
   "borderSize": 0,
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "id": "IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_rollover.png",
   "minHeight": 0,
   "shadow": false,
   "minWidth": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_pressed.png",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "cursor": "hand",
   "mode": "push",
   "transparencyActive": true,
   "borderRadius": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "gyroscopeEnabled": true,
  "buttonMoveLeft": {
   "paddingBottom": 0,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C.png",
   "borderSize": 0,
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "id": "IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_rollover.png",
   "minHeight": 0,
   "shadow": false,
   "minWidth": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_pressed.png",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "cursor": "hand",
   "mode": "push",
   "transparencyActive": true,
   "borderRadius": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonZoomOut": {
   "paddingBottom": 0,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552.png",
   "borderSize": 0,
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "id": "IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_rollover.png",
   "minHeight": 0,
   "shadow": false,
   "minWidth": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_pressed.png",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "cursor": "hand",
   "mode": "push",
   "transparencyActive": true,
   "borderRadius": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 8.95,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.518057285180573,
   "pitch": -0.4273448749223894
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "cardboardMenu": "this.Menu_043AD88C_0993_A266_419D_D26735BA4090",
  "class": "Panorama",
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_t.jpg",
  "hfov": 360,
  "id": "panorama_0013C644_0970_AEE5_419E_355CC5ED90DC",
  "vfov": 52.19084371162954,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 3536,
       "height": 3536,
       "url": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_r_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_r.jpeg"
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 3536,
       "height": 3536,
       "url": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_f_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_f.jpeg"
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 3536,
       "height": 3536,
       "url": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_b_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_b.jpeg"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 3536,
       "height": 3536,
       "url": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_l_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "width": 1024,
       "height": 1024,
       "url": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_l.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3, this.camera_0401F89A_0993_A26D_4196_244B40BEB9E2); this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_05A0E93A_0993_62A2_4153_7A25C1D6D39B",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -109.61394769613948,
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 415,
           "height": 420,
           "url": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -0.464969835356461,
        "hfov": 13.449121260556865
       }
      ],
      "maps": [
       {
        "hfov": 13.449121260556865,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 197,
           "height": 200,
           "url": "media/panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -109.61394769613948,
        "roll": 0,
        "pitch": -0.464969835356461
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 65,
  "label": "IMG_20160720_111115.vr"
 },
 {
  "timeToIdle": 5000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 8.95,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "yawDelta": 18.5
    }
   ],
   "id": "sequence_00920A94_0971_6665_418A_E9D4448A0302"
  },
  "idleSequence": "this.sequence_00920A94_0971_6665_418A_E9D4448A0302",
  "id": "panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3_camera",
    "media": "this.panorama_0E77EBC1_0970_A5DF_4181_FD11C80B4DA3"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 0)",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0013C644_0970_AEE5_419E_355CC5ED90DC_camera",
    "media": "this.panorama_0013C644_0970_AEE5_419E_355CC5ED90DC"
   }
  ],
  "id": "mainPlayList"
 },
 "this.Menu_043AD88C_0993_A266_419D_D26735BA4090",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 8.95,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_0401F89A_0993_A26D_4196_244B40BEB9E2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23.312577833125772,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "timeToIdle": 5000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 8.95,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "yawDelta": 18.5
    }
   ],
   "id": "sequence_040CD8A5_0993_A3A7_4137_36DDE1F66D20"
  },
  "idleSequence": "this.sequence_040CD8A5_0993_A3A7_4137_36DDE1F66D20",
  "id": "camera_040CC8A5_0993_A3A7_419B_DB73E30C5035",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 70.38605230386052,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "borderRadius": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "borderSize": 0,
  "toolTipBorderSize": 1,
  "progressOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "id": "MainViewer",
  "toolTipFontSize": 12,
  "toolTipShadowSpread": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "progressRight": 10,
  "height": "100%",
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "width": "100%",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipFontColor": "#606060",
  "playbackBarHeight": 20,
  "toolTipShadowBlurRadius": 3,
  "shadow": false,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipPaddingRight": 6,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "paddingTop": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderColor": "#767676",
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadWidth": 6,
  "progressHeight": 20,
  "progressBottom": 1,
  "progressBarOpacity": 1,
  "playbackBarHeadHeight": 30,
  "paddingRight": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderSize": 2,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarRight": 0,
  "toolTipShadowColor": "#333333",
  "toolTipPaddingBottom": 4,
  "toolTipShadowOpacity": 1,
  "progressBarBorderRadius": 4,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "paddingBottom": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBorderRadius": 4,
  "toolTipOpacity": 1,
  "transitionMode": "blending",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipFontFamily": "Arial",
  "toolTipPaddingTop": 4,
  "playbackBarBorderRadius": 4,
  "minHeight": 50,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 100,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "class": "ViewerArea",
  "playbackBarHeadBorderRadius": 0,
  "left": 0,
  "progressLeft": 10,
  "playbackBarBottom": 10,
  "toolTipFontStyle": "normal",
  "progressBorderColor": "#AAAAAA",
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarBorderSize": 2,
  "playbackBarBackgroundOpacity": 1,
  "paddingLeft": 0,
  "top": 0
 },
 {
  "paddingBottom": 0,
  "paddingLeft": 0,
  "bottom": "0%",
  "borderSize": 0,
  "gap": 10,
  "horizontalAlign": "center",
  "height": 142,
  "overflow": "scroll",
  "layout": "horizontal",
  "width": "100%",
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "minHeight": 1,
  "shadow": false,
  "minWidth": 1,
  "scrollBarMargin": 2,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Container",
  "left": "0%",
  "verticalAlign": "middle",
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "gap": 4,
    "width": 360,
    "horizontalAlign": "center",
    "height": "96.479%",
    "id": "Container_5645B517_5EBA_61DA_41CE_5170204AEC9E",
    "overflow": "hidden",
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "contentOpaque": false,
    "minHeight": 20,
    "shadow": false,
    "minWidth": 360,
    "scrollBarMargin": 2,
    "paddingTop": 0,
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver",
    "children": [
     "this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
     "this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
     "this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
     "this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
     {
      "paddingBottom": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "gap": 4,
      "width": 40,
      "horizontalAlign": "center",
      "height": "100%",
      "id": "Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD",
      "overflow": "hidden",
      "layout": "vertical",
      "backgroundOpacity": 0,
      "contentOpaque": false,
      "minHeight": 20,
      "shadow": false,
      "minWidth": 20,
      "scrollBarMargin": 2,
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "class": "Container",
      "scrollBarColor": "#000000",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarVisible": "rollOver",
      "children": [
       "this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
       "this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
       "this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44"
      ],
      "scrollBarOpacity": 0.5,
      "borderRadius": 0
     },
     "this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
     "this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
     {
      "paddingBottom": 0,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5.png",
      "borderSize": 0,
      "width": 40,
      "horizontalAlign": "center",
      "height": 40,
      "id": "IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
      "backgroundOpacity": 0,
      "minHeight": 0,
      "shadow": false,
      "minWidth": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5_pressed.png",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "cursor": "hand",
      "mode": "toggle",
      "transparencyActive": true,
      "borderRadius": 0
     },
     "this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA"
    ],
    "scrollBarOpacity": 0.5,
    "borderRadius": 0
   },
   "this.IconButton_05F8E4C2_0991_63E2_4152_DB3B23CF9314"
  ],
  "scrollBarOpacity": 0.5,
  "borderRadius": 0
 }
], 
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "height": "100%",
 "overflow": "visible",
 "layout": "absolute",
 "width": "100%",
 "contentOpaque": false,
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "registerKey": function(key, value){    window[key] = value; },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       resumeFunction(caller);   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].pause();   } },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "getKey": function(key){    return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].play();   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var rollOutFunction = function(){       var rollOverFunction = function(){           clearTimeout(timeoutID);           dispose();       };       var timeoutFunction = function(){           setVisibility(false);           dispose();       };       var dispose = function(){           parentComponent.unbind('rollOver', rollOverFunction, this);       };       parentComponent.unbind('rollOut', rollOutFunction, this);       parentComponent.bind('rollOver', rollOverFunction, this);       var timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);   };   var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   parentComponent.bind('rollOut', rollOutFunction, this);   setVisibility(true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       var index = audios.indexOf(audio);       if(index != -1){           audios.splice(index, 1);       }   }   audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       if(!self.isCardboardVideMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "isCardboardVideMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){    var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "existsKey": function(key){    return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   playList.bind('change', changeFunction, this);   this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = [audio];   }   else if(audios.indexOf(audio) == -1){       audios.push(audio);   }   audio.bind('end', endFunction, this);   audio.play(); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){    delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && typeof player.resumeCamera !== 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && typeof player.pauseCamera !== 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } }
 },
 "minHeight": 20,
 "shadow": false,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "scrollBarColor": "#000000",
 "buttonToggleMute": "this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_05F8E4C2_0991_63E2_4152_DB3B23CF9314], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)"
})