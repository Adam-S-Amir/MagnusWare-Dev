var programs_being_loaded = 0;

function enhance_embed(embed) {
	var $embed = $(embed);

	$("body").addClass("loading-program");
	programs_being_loaded += 1;

	$embed.on("load", function () {

		if (--programs_being_loaded <= 0) {
			$("body").removeClass("loading-program");
		}

		try {
			console.assert(embed.contentWindow.document === embed.contentDocument);
		} catch (e) {
			return;
		}

		if (window.themeCSSProperties) {
			applyTheme(themeCSSProperties, embed.contentDocument.documentElement);
		}

		embed.contentDocument.addEventListener("mousedown", (event) => {
			var delegate_pointerup = function () {
				if (embed.contentWindow && embed.contentWindow.jQuery) {
					embed.contentWindow.jQuery("body").trigger("pointerup");
				}
				if (embed.contentWindow) {
					const event = new embed.contentWindow.MouseEvent("mouseup", {
						button: 0
					});
					embed.contentWindow.dispatchEvent(event);
					const event2 = new embed.contentWindow.MouseEvent("mouseup", {
						button: 2
					});
					embed.contentWindow.dispatchEvent(event2);
				}
				clean_up_delegation();
			};

			$G.on("mouseup blur", delegate_pointerup);
			embed.contentDocument.addEventListener("mouseup", clean_up_delegation);

			function clean_up_delegation() {
				$G.off("mouseup blur", delegate_pointerup);
				embed.contentDocument.removeEventListener("mouseup", clean_up_delegation);
			}
		});

		proxy_keyboard_events(embed);

		if (embed.contentDocument.querySelector("#error #livewebInfo.available")) {
			var message = document.createElement("div");
			message.style.position = "absolute";
			message.style.left = "0";
			message.style.right = "0";
			message.style.top = "0";
			message.style.bottom = "0";
			message.style.background = "#c0c0c0";
			message.style.color = "#000";
			message.style.padding = "50px";
			embed.contentDocument.body.appendChild(message);
			message.innerHTML = `<a target="_blank">Save this url in the Wayback Machine</a>`;
			message.querySelector("a").href =
				"https://web.archive.org/save/https://magnusware.vercel.app/" +
				embed.src.replace(/.*https:\/\/magnusware.vercel.app\/?/, "");
			message.querySelector("a").style.color = "blue";
		}

		var $contentWindow = $(embed.contentWindow);
		$contentWindow.on("pointerdown click", function (e) {
			embed.$window && embed.$window.focus();

			$(".menu-button").trigger("release");
			$(".menu-popup").hide();
		});
		$contentWindow.on("pointerdown", function (e) {
			$embed.css("pointer-events", "all");
			$("body").addClass("drag");
		});
		$contentWindow.on("pointerup", function (e) {
			$("body").removeClass("drag");
			$embed.css("pointer-events", "");
		});

		embed.contentWindow.close = function () {
			embed.$window && embed.$window.close();
		};

		embed.contentWindow.showMessageBox = (options) => {
			return showMessageBox({
				title: options.title ?? embed.contentWindow.defaultMessageBoxTitle,
				...options,
			});
		};
	});
	$embed.css({
		minWidth: 0,
		minHeight: 0,
		flex: 1,
		border: 0,
	});
}

function proxy_keyboard_events(embed) {
	for (const event_type of ["keyup", "keydown", "keypress"]) {
		embed.contentWindow.addEventListener(event_type, (event) => {
			const proxied_event = new KeyboardEvent(event_type, {
				target: embed,
				view: embed.ownerDocument.defaultView,
				bubbles: true,
				cancelable: true,
				key: event.key,
				keyCode: event.keyCode,
				which: event.which,
				code: event.code,
				shiftKey: event.shiftKey,
				ctrlKey: event.ctrlKey,
				metaKey: event.metaKey,
				altKey: event.altKey,
				repeat: event.repeat,
			});
			const result = embed.dispatchEvent(proxied_event);
			if (!result) {
				event.preventDefault();
			}
		}, true);
	}
}

function make_embed_window(options, id) {

	options.resizable ??= true;
	var $win = new $Window(options, id);

	var $embed = $win.$embed = $("<embed>").attr({
		src: options.src
	});
	enhance_embed($embed[0]);
	$win.$content.append($embed);
	var embed = $win.embed = $embed[0];
	embed.$window = $win;
	$embed.on("load", function () {
		$win.show();
		$win.focus();
	});
	$win.$content.css({
		display: "flex",
		flexDirection: "column",
	});
	$win.center();
	$win.hide();
	return $win;
}

$(window).on("pointerdown", function (e) {
	$("body").addClass("drag");
});
$(window).on("pointerup dragend blur", function (e) {
	if (e.type === "blur") {
		if (document.activeElement.tagName.match(/embed/i)) {
			return;
		}
	}
	$("body").removeClass("drag");
	$("embed").css("pointer-events", "");
});