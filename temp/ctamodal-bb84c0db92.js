
<script type="text/javascript">

    document.addEventListener("DOMContentLoaded", () => {

        // https://github.com/inorganik/CountUp.js

        /*
        var t=function(){return t=Object.assign||function(t){for(var i,n=1,s=arguments.length;n<s;n++)for(var a in i=arguments[n])Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);return t},t.apply(this,arguments)},i=function(){function i(i,n,s){var a=this;this.endVal=n,this.options=s,this.version="2.9.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){a.startTime||(a.startTime=t);var i=t-a.startTime;a.remaining=a.duration-i,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(i,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(i,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(i/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),i<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.options.onCompleteCallback&&a.options.onCompleteCallback()},this.formatNumber=function(t){var i,n,s,e,o=t<0?"-":"";i=Math.abs(t).toFixed(a.options.decimalPlaces);var r=(i+="").split(".");if(n=r[0],s=r.length>1?a.options.decimal+r[1]:"",a.options.useGrouping){e="";for(var l=3,h=0,u=0,p=n.length;u<p;++u)a.options.useIndianSeparators&&4===u&&(l=2,h=1),0!==u&&h%l==0&&(e=a.options.separator+e),h++,e=n[p-u-1]+e;n=e}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),o+a.options.prefix+n+s+a.options.suffix},this.easeOutExpo=function(t,i,n,s){return n*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=t(t({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.el="string"==typeof i?document.getElementById(i):i,n=null==n?this.parse(this.el.innerHTML):n,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,i):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return i.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),s=n.top+window.pageYOffset,a=n.top+n.height+window.pageYOffset;a<i&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||s>i)&&!t.paused&&t.reset()}},i.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(t){var i;if(this.el){var n=this.formattingFn(t);if(null===(i=this.options.plugin)||void 0===i?void 0:i.render)this.options.plugin.render(this.el,n);else if("INPUT"===this.el.tagName)this.el.value=n;else"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},i.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},i.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i.prototype.parse=function(t){var i=function(t){return t.replace(/([.,' ])/g,"\\$1")},n=i(this.options.separator),s=i(this.options.decimal),a=t.replace(new RegExp(n,"g"),"").replace(new RegExp(s,"g"),".");return parseFloat(a)},i}();
            //export{i as CountUp};

        window.CountUp = i; // instead of exporting as module
        */

        var CountUp = (function() { // stripped-back version of above providing only desired options hard-coded into function (generated by perplexity.ai)
            function CountUp() {
                this.el = document.querySelector('.progress > p > span');
                this.endVal = 125;
                this.duration = 3; // seconds
                this.smartEasingAmount = 25;
                this.enableScrollSpy = true;
                this.startVal = 0;
                this.decimalPlaces = 0;
                this.useEasing = true;
                this.frameVal = this.startVal;
                this.startTime = null;
                this.paused = true;
                this.error = "";
                this.printValue(this.frameVal);
                if (this.enableScrollSpy) {
                    this.paused = true;
                    this.handleScrollBound = this.handleScroll.bind(this);
                    window.addEventListener("scroll", this.handleScrollBound);
                    this.handleScroll(); // initial check
                }
            }

            CountUp.prototype.printValue = function(value) {
                this.el.textContent = value.toFixed(this.decimalPlaces);
            };

            CountUp.prototype.count = function(timestamp) {
                if (!this.startTime) this.startTime = timestamp;
                const progress = timestamp - this.startTime;
                const durationMs = this.duration * 1000;
                const useEasing = this.useEasing;

                let val;
                if (progress < durationMs) {
                    val = useEasing
                        ? this.easeOutExpo(progress, this.startVal, this.endVal - this.startVal, durationMs)
                        : this.startVal + (this.endVal - this.startVal) * (progress / durationMs);
                    this.frameVal = val;
                    this.printValue(val);
                    this.rAF = requestAnimationFrame(this.count.bind(this));
                } else {
                    this.frameVal = this.endVal;
                    this.printValue(this.endVal);
                    if (this.onCompleteCallback) this.onCompleteCallback();
                }
              };

            CountUp.prototype.easeOutExpo = function(t, b, c, d) {
                return c * (1 - Math.pow(2, -10 * t / d)) + b;
            };

            CountUp.prototype.start = function() {
                if (this.error) return;
                if (this.paused) {
                    this.paused = false;
                    if (this.enableScrollSpy && this.handleScrollBound) { // added scrollspy event listener cleanup if enabled to remove it once animation runs or modal closes
                        window.removeEventListener("scroll", this.handleScrollBound);
                    }
                    requestAnimationFrame(this.count.bind(this));
                }
              };

            CountUp.prototype.handleScroll = function() {
                if (this.paused) {
                    const rect = this.el.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                    if (isVisible) {
                        this.start();
                    }
                }
            };

            return CountUp;
        })();


        function createModal() {
            const modal = document.createElement('dialog');
            modal.classList.add('ctamodal');
            modal.innerHTML = `
                <form method="dialog">
                    <button type="submit" autofocus></button>
                    <div>
                        <section-heading><span>CTA modal heading</span></section-heading>
                        <p>CTA modal text line 1.</p>
                        <p>CTA modal text line 2.</p>
                        <p>CTA modal text line 3.</p>
                        <div class="progress">
                            <p><span>125</span> of 250 paying subscribers</p>
                            <div><span style="width: 50%;"><span></span></span></div>
                        </div>
                        <p>
                            <a class="button" href="{% link _pages/upgrade/upgrade.html %}">Upgrade to paid
                                <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <polyline fill="none" stroke="#fff" points="10 5 15 9.5 10 14" />
                                    <line fill="none" stroke="#fff" x1="4" y1="9.5" x2="15" y2="9.5" />
                                </svg>
                            </a>
                        </p>
                    </div>
                </form>
            `;

            /* enables closing click anywhere on dialog of backdrop
            modal.addEventListener('click', event => {
                if (event.target === modal) {
                    modal.close()
                }
            });
            */

            document.body.appendChild(modal);

            modal.showModal();

            const countUpInstance = new CountUp();
            if (!countUpInstance.error) {
                countUpInstance.start();
            } else {
                console.error(countUpInstance.error);
            }

            modal.addEventListener('close', () => { // added scrollspy event listener cleanup if enabled to remove it once animation runs or modal closes
                if (countUpInstance.enableScrollSpy && countUpInstance.handleScrollBound) {
                    window.removeEventListener("scroll", countUpInstance.handleScrollBound);
                }
            });
        }

        createModal();

    });

</script>
