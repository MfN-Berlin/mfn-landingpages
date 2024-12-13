import React from 'react';
import Button from './Button';

const CardText = ({
  kicker,
  headline,
  headlineStyle = 'h2',
  body,
  spacing = 'regular',
  alignment = 'left',
  textColor = 'black',
  buttons = []
}) => {
  const spacingClasses = {
    regular: 'gap-[7px]',
    wide: 'gap-4',
  };

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center justify-center',
  };

  const textColorClasses = {
    black: {
      kicker: 'text-Black-900/60',
      headline: 'text-Black-900',
      body: 'text-Black-700'
    },
    white: {
      kicker: 'text-White-White/80',
      headline: 'text-White-White',
      body: 'text-White-White'
    }
  };

  const getHeadingConfig = (style) => {
    if (style === 'h1-small') {
      return {
        tag: 'h1',
        extraClass: 'typography-h1-small'
      };
    }
    return {
      tag: style.replace('-small', ''),
      extraClass: ''
    };
  };

  const { tag: HeadingTag, extraClass } = getHeadingConfig(headlineStyle);

  return (
    <div className={`w-full max-w-[700px] flex-col justify-start justify-items-center  inline-flex ${spacingClasses[spacing]} ${alignmentClasses[alignment]}`}>
      {kicker && (
        <p className={`self-stretch ${textColorClasses[textColor].kicker} typography-kicker ${alignmentClasses[alignment]}`}>
          {kicker}
        </p>
      )}
      {headline && (
        <HeadingTag className={`self-stretch ${textColorClasses[textColor].headline} ${extraClass}`}>
          {headline}
        </HeadingTag>
      )}
      {body && (
        <p 
          className={`self-stretch ${textColorClasses[textColor].body} ${alignmentClasses[alignment]}`}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      )}
      {buttons.length > 0 && (
        <div className={`flex gap-4 mt-2 flex-wrap ${alignmentClasses[alignment]}`}>
          {buttons.map((buttonProps, index) => (
            <Button 
              key={index} 
              text={buttonProps.text}
              url={buttonProps.url}
              variant={buttonProps.variant}
              onClick={buttonProps.onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardText;
