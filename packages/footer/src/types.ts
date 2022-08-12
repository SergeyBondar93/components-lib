import { ReactNode } from "react";

export interface InfoBlock {
  /**
   * Название компании
   */
  companyName: ReactNode;
  /**
   * Блок копирайта
   */
  copyright: {
    /**
     * Дата начала компании
     */
    from: number;
    /**
     * Текущий год
     */
    to: number;
    /**
     * Текст копирайта
     */
    text: ReactNode;
  };
  /**
   * Текст о компании, "мы сотрудничаем с..."
   */
  companyInfo: ReactNode;
}

export interface NavigationSection {
  title: string;
  links: { href: string; title: string }[];
}

export type NavigationSections = [
  NavigationSection,
  NavigationSection,
  NavigationSection,
  NavigationSection
];
