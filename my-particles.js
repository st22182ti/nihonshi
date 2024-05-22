particlesJS("particles-js",{
	"particles":{
		"number":{
			"value":8,
			"density":{
				"enable":false,
				"value_area":400
			}
		},
		"color": {
        "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC","#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
		},
		"shape":{
			"type":"polygon",
			"stroke":{
				"width":0,
			},
			"polygon":{
				"nb_sides":5
			}
			},
			"opacity":{
				"value":0.7,
				"random":false,
				"anim":{
					"enable":true,
					"speed":0.1,
					"opacity_min":0,
					"sync":false
				}
			},
			"size":{
				"value":6.305992965476349,
				"random":true,//サイズをランダムに
				"anim":{
					"enable":true,
					"speed":0.5,
					"size_min":0.8,
					"sync":false
				}
			},
			"line_linked":{
				"enable":false,
			},
			"move":{
				"enable":true,
			"speed":6,
			"direction":"bottom",
			"random":false,
			"straight":false,
			"out_mode":"out",
			"bounce":true,
				"attract":{
					"enable":false,
					"rotateX":600,
					"rotateY":1200
				}
			}
		},
		"interactivity":{
			"detect_on":"canvas",
			"events":{
				"onhover":{
					"enable":false,
				},
				"onclick":{
					"enable":false,
				},
				"resize":true
			},
		},
		"retina_detect":true
	});