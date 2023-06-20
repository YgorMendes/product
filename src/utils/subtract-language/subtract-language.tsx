interface SubtractLanguageProps {
  language: string | undefined;
  event: 'toUpperCase' | 'toLowerCase';
}

export function subtractLanguage({ event, language }: SubtractLanguageProps) {
  return event === 'toUpperCase'
    ? language?.substr(0, 2).toUpperCase()
    : language?.substr(0, 2).toLowerCase();
}
