import React from 'react';

const CardText = ({
  kicker,
  headline,
  headlineStyle = 'h2',
  body,
  spacing = 'regular',
  alignment = 'left', // New prop for text alignment
}) => {
  const spacingClasses = {
    regular: 'gap-[7px]',
    wide: 'gap-4',
  };

  const headlineClasses = {
    h1: 'typography-h1',
    'h1-small': 'typography-h1-small',
    h2: 'typography-h2',
    h3: 'typography-h3',
    h4: 'typography-h4',
  };

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
  };

  return (
    <div className={`w-full max-w-[700px] flex-col justify-start justify-items-center inline-flex ${spacingClasses[spacing]} ${alignmentClasses[alignment]}`}>
      {kicker && (
        <div className={`self-stretch text-Black-900/60 typography-kicker ${alignmentClasses[alignment]}`}>
          {kicker}
        </div>
      )}
      {headline && (
        <div className={`self-stretch justify-center gap-2.5 inline-flex ${alignmentClasses[alignment]}`}>
          <div className={`grow shrink basis-0 text-Black-900 ${headlineClasses[headlineStyle]}`}>
            {headline}
          </div>
        </div>
      )}
      {body && (
        <div 
          className={`self-stretch text-Black-900 typography-p ${alignmentClasses[alignment]}`}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      )}
    </div>
  );
};

export default CardText;
