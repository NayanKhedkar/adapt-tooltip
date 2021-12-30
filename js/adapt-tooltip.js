/*
 * adapt-tooltip
 * License -
 */
import Adapt from 'core/js/adapt';
import CONFIG from './conf';
class Tooltip extends Backbone.Controller {

    initialize() {
        this.$tooltip = null;
        this.$targetEle = null;
        Adapt.on("app:dataReady", this.setUptoolTip.bind(this));
    }

    setUptoolTip() {
        if (!(Adapt.course.get('_tooltip')?._isEnabled)) return;
        window.tooltip = this.onMouseEnter.bind(this);
    }

    onMouseEnter(event) {
        this.$tooltip = $('<div id="tooltip"></div>');
        this.$targetEle = $(event.currentTarget);
        const tip = this.$targetEle.attr('data-title');
        if (!tip || tip == '') return false;
        const lazyLayout = _.debounce(this.showTooltip.bind(this), 200);
        this.$tooltip.css('opacity', 0).html(tip).appendTo('body');
        this.showTooltip();
        $(window).resize(lazyLayout.bind(this));
        this.$targetEle.on('mouseleave', this.removeTooltip.bind(this));
        this.$tooltip.on('click', this.removeTooltip.bind(this));
    }

    showTooltip() {
        if (!this.$tooltip || !this.$targetEle) return;

        const targetEleLeft = this.$targetEle.offset().left;
        const targetEleTop = this.$targetEle.offset().top;
        const targetEleWidth = this.$targetEle.outerWidth();

        const tooltipWidth = this.$tooltip.outerWidth();
        const tooltipHeight = this.$tooltip.outerHeight();

        let posLeft = targetEleLeft + (targetEleWidth / 2) - (tooltipWidth / 2);
        let posTop = targetEleTop - tooltipHeight - CONFIG.POSITION_FROM_TEXT;

        if (posLeft < 0) {
            posLeft = targetEleLeft + targetEleWidth / 2 - CONFIG.POSITION_FROM_TEXT;
            this.$tooltip.addClass('left');
        } else {
            this.$tooltip.removeClass('left');
        }

        if (posLeft + tooltipWidth > $(window).width()) {
            posLeft = targetEleLeft - tooltipWidth + targetEleWidth / 2 + CONFIG.POSITION_FROM_TEXT;
            this.$tooltip.addClass('right');
        } else {
            this.$tooltip.removeClass('right');
        }

        if (posTop < 0) {
            posTop = targetEleTop + targetEleTop;
            this.$tooltip.addClass('top');
        } else {
            this.$tooltip.removeClass('top');
        }
        this.setUptoolTipWidth();
        this.$tooltip.css({
            left: posLeft,
            top: posTop
        }).animate({
            top: '+=' + CONFIG.ANIMATE_TOP,
            opacity: 1
        }, CONFIG.DURATION, CONFIG.EASING);

    }

    setUptoolTipWidth() {
        if ($(window).width() < this.$tooltip.outerWidth() * CONFIG.PADDING_FACTOR) {
            this.$tooltip.css('max-width', $(window).width() / 2);
        } else {
            this.$tooltip.css('max-width', CONFIG.MAX_WIDTH);
        }
    }

    removeTooltip(event) {
        this.$tooltip.animate({
            top: '-=' + CONFIG.ANIMATE_TOP,
            opacity: 0
        }, CONFIG.DURATION, CONFIG.EASING, (e) => {
            this.$tooltip.remove();
            this.$tooltip = null;
            this.$targetEle = null;
        });
    }

};

export default new Tooltip();