import React from 'react';
import businessDashboardTheme from '../BusinessDashboard';
import { runTests as ButtonTests } from '../../../Button/test/Button.visual';
import { runTests as CircularProgressBarTests } from '../../../CircularProgressBar/test/CircularProgressBar.visual';
import { runTests as LinearProgressBarTests } from '../../../LinearProgressBar/test/LinearProgressBar.visual';
import { runTests as HeadingTests } from '../../../Heading/test/Heading.visual';
import { runTests as TextTests } from '../../../Text/test/Text.visual';
import { runTests as TextButtonTests } from '../../../TextButton/test/TextButton.visual';
import { runTests as IconButtonTests } from '../../../IconButton/test/IconButton.visual';
import { runTests as ListItemSelectTests } from '../../../ListItemSelect/test/ListItemSelect.visual';
import { runTests as SidebarTests } from '../../../Sidebar/test/Sidebar.visual';
import { runTests as SidebarBackButtonTests } from '../../../SidebarBackButton/test/SidebarBackButton.visual';
import { runTests as SidebarDividerTests } from '../../../SidebarDivider/test/SidebarDivider.visual';
import { runTests as SidebarHeaderTests } from '../../../SidebarHeader/test/SidebarHeader.visual';
import { runTests as SidebarSectionItemTests } from '../../../SidebarSectionItem/test/SidebarSectionItem.visual';
import { runTests as SidebarSectionTitleTests } from '../../../SidebarSectionTitle/test/SidebarSectionTitle.visual';
import { runTests as CardTests } from '../../../Card/Card.visual';
import { runTests as CarouselTests } from '../../../Carousel/test/Carousel.visual';
import { ThemeProvider } from '../../..';

const themeName = 'Business Dashboard';
const testWithTheme = test => {
  return (
    <ThemeProvider theme={businessDashboardTheme()}>
      <>{test}</>
    </ThemeProvider>
  );
};

ButtonTests({ themeName, testWithTheme });
CircularProgressBarTests({ themeName, testWithTheme });
LinearProgressBarTests({ themeName, testWithTheme });
HeadingTests({ themeName, testWithTheme });
TextTests({ themeName, testWithTheme });
TextButtonTests({ themeName, testWithTheme });
IconButtonTests({ themeName, testWithTheme });
CardTests({ themeName, testWithTheme });
CarouselTests({ themeName, testWithTheme });
SidebarTests({ themeName, testWithTheme });
SidebarBackButtonTests({ themeName, testWithTheme });
SidebarDividerTests({ themeName, testWithTheme });
SidebarHeaderTests({ themeName, testWithTheme });
SidebarSectionItemTests({ themeName, testWithTheme });
SidebarSectionTitleTests({ themeName, testWithTheme });
ListItemSelectTests({ themeName, testWithTheme });
