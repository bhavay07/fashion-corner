import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import HomePage from '../components/HomePage';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <>
      <AnimatePresence>
        {snap.intro && (
          <motion.section className="home" {...slideAnimation('left')}>
            <motion.header {...slideAnimation("down")}>
              <img
                src='./3.png'
                alt="logo"
                style={{ width: '100px', height: '120px' }}
                className="object-contain"
              />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  LET'S <br className="xl:block hidden" /> CREATE
                </h1>
              </motion.div>
              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md font-normal text-black-600 text-base">
                  Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your Imagination</strong>{" "} and define your own style.
                </p>

                <CustomButton
                  type="filled"
                  title="Customize It"
                  handleClick={() => state.intro = false}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}


export default Home