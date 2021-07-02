import React from 'react';
import App from './App';
import {ViewProvider} from '../contexts/ViewContext';
import {TextProvider} from '../contexts/TextContext';
import {EnemyProvider} from '../contexts/EnemyContext';
import {PlayerProvider} from '../contexts/PlayerContext';
import {InventoryProvider} from '../contexts/InventoryContext';

export default function ContextContainer() {
  return (
    <div>
      <ViewProvider>
        <InventoryProvider>
          <TextProvider>
            <PlayerProvider>
              <EnemyProvider>
                <App />
              </EnemyProvider>
            </PlayerProvider>
          </TextProvider>
        </InventoryProvider>
      </ViewProvider>
    </div>
  );
}
